<template>
  <div class="about">
    <div class="map" ref="map"></div>

    <!-- <div class="legend">
      <div class="institutes">Institutes</div>
      <div class="cluster">Group of Institutes</div>
      <div class="labs">Laboratory</div>
    </div> -->

    <div class="data">
      <div @click="changeLayer('chapters')"><span class="num">{{ this.totchapters }}</span> National Chapters</div>
      <div @click="zoomedto=='Africa' ? changeLayer('members') : null"><span class="num">{{ this.totmembers }}</span> Members</div>
      <div @click="zoomedto=='Africa' ? changeLayer('alumni') : null"><span class="num">{{ this.totalumni }}</span> Alumni</div>
      <div @click="zoomedto=='Africa' ? changeLayer('phds') : null"><span class="num">{{ this.totphds }}</span> Phds</div>
      <div class="institute"><span class="num">{{ this.institutes.length }}</span> Institutes</div>
      <div class="lab"><span class="num">{{ this.totlabs }}</span> Laboratories</div>

    </div>

    <!-- <div class="selected-country">
      <h2
        :style="
          'color: rgb(' + this.mapR + ',' + this.mapG + ',' + this.mapB + ')'
        "
      >
        {{ this.selectedCountry }}
      </h2>
    </div> -->

    <!-- <div class="selected-cluster">
      <div v-for="(cl, index) in selectedCluster" :key="'cl' + index">
        {{ cl.properties.title }}
      </div>
    </div> -->

    <!-- <div class="button-filters-1">
      <h3 style="margin: 0">Heatmaps</h3>
      <button v-if="zoomedto!='SudAmerica'" @click="changeLayer('phds')">Phds</button>
      <button v-if="zoomedto!='SudAmerica'" @click="changeLayer('members')">Members</button>
      <button v-if="zoomedto!='SudAmerica'" @click="changeLayer('alumni')">Alumni</button>
      <button @click="changeLayer('chapters')">National Chapters</button>
      <h3 style="margin: 0">Toggles</h3>
      <button @click="toggleLayerVisibility('institutes-points'); toggleLayerVisibility('clusters'); toggleLayerVisibility('cluster-count');">Institutes</button>
      <button v-if="zoomedto == 'Africa'" @click="toggleLayerVisibility('africa-labs')">Labs</button>
      <button v-if="zoomedto == 'SudAmerica'" @click="toggleLayerVisibility('sudamerica-labs')">Labs</button>
      
    </div> -->

    <div class="button-filters-3">
      <button class="btn-samerica" @click="goToSAmerica()">Sud America</button>
      <button class="btn-africa" @click="goToAfrica()">Africa</button>
      <button @click="zoomout()">Zoom out</button>
    </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import Supercluster from "supercluster";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaW50ZXJmYXNlIiwiYSI6ImNqYW8zZGJkeTRjNXQzNHIxYmJpMWF6MnkifQ.TfWAUiqo6rDYVGid30Q6sA";

import "mapbox-gl/dist/mapbox-gl.css";

export default {
  name: "About",
  data() {
    return {
      map: null,
      mapData: null,
      zoomedto: "Africa",
      boundariesColor: "#ecd041",
      baseMapColor: "#b0b0b0",
      hoverLineColor: "#ecd041",
      selectedCountry: "",
      mapR: 45,
      mapG: 134,
      mapB: 45,
      supercluster: null,
      bounds: null,
      zoom: null,
      minZoom: 2,
      maxZoom: 7,
      clusteredPoints: null,
      displayHover: false,
      selectedCluster: [],
      visibleLayers: [],
      hoveredStateId: null,
    };
  },
  methods: {
    zoomout() {
      this.map.flyTo({
        center: [0, 20],
        zoom: this.minZoom
      })
    },
    clusterComputing(id) {
      this.bounds = this.map.getBounds();
      this.zoom = this.map.getZoom();

      this.clusteredPoints = this.supercluster.getClusters(
        [
          this.bounds.getWest(),
          this.bounds.getSouth(),
          this.bounds.getEast(),
          this.bounds.getNorth(),
        ],
        this.zoom
      );

      this.map.getSource(id).setData({
        type: "FeatureCollection",
        features: this.clusteredPoints.map(({ geometry, properties }) => ({
          type: "Feature",
          geometry,
          properties,
        })),
      });
    },
    numbersLayer() {
      let matchExpressionTitle = ["match", ["get", "name_en"]];

      for (const row of this.keys) {
        let title = row[1] > 0 ? row[1] : "";
        let titlec = `${title}`;
        matchExpressionTitle.push(row[0], titlec);
      }

      // Last value is the default, used where there is no data
      matchExpressionTitle.push("");

      //HEATMAP NUMBERS LAYER
      this.map.addLayer(
        {
          id: "countries-titles",
          type: "symbol",
          source: "titles",
          "source-layer": "place_label",
          layout: {
            "text-field": matchExpressionTitle,
            "text-size": ["interpolate", ["linear"], ["zoom"], 3, 14, 7, 30],
            "text-anchor": "top",
            "text-allow-overlap": true,
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          },
          paint: {
            "text-color": "#fff",
          },
        },
        "country-labels"
      );
    },
    toggleLayerVisibility(layerId) {
      var layer = this.map.getLayer(layerId);

      if (layer) {
        var visibility = this.map.getLayoutProperty(layerId, "visibility");
        this.map.setLayoutProperty(
          layerId,
          "visibility",
          visibility != "none" ? "none" : "visible"
        );
      }
    },
    changeLayer(dataname) {
      if (this.map) {
        this.visibleLayers.forEach((e) => this.map.removeLayer(e));
      }
      this.visibleLayers = [];

      switch (dataname) {
        case "members":
          this.map.removeLayer("countries-data");
          this.mapData = this.members;
          this.colorCountries();

          if(this.map.getLayer("countries-titles"))
            this.map.removeLayer("countries-titles");
          this.numbersLayer();
          break;
        case "alumni":
          this.map.removeLayer("countries-data");
          this.mapData = this.alumni;
          this.colorCountries();

          if(this.map.getLayer("countries-titles"))
            this.map.removeLayer("countries-titles");
          this.numbersLayer();
          break;
        case "chapters":
          this.map.removeLayer("countries-data");
          this.mapData = this.chapters;
          this.colorCountries();

          if(this.map.getLayer("countries-titles"))
            this.map.removeLayer("countries-titles");
          break;
        case "phds":
          this.map.removeLayer("countries-data");
          this.mapData = this.phds;
          this.colorCountries();

          if(this.map.getLayer("countries-titles"))
            this.map.removeLayer("countries-titles");
          this.numbersLayer();
          break;
      }
    },
    goToAfrica() {
      this.map.flyTo({
        center: [20, 0],
        zoom: 3,
      });
      this.mapR = 45;
      this.mapG = 134;
      this.mapB = 45;

      let prevs = this.zoomedto

      this.zoomedto = "Africa";

      if(prevs!='Africa') {
        this.changeLayer('chapters')
        this.map.removeLayer('state-stroke')
        this.addBorders()
        this.map.setPaintProperty('state-fills', 'fill-color', this.hoverMapColor);

        this.map.removeLayer('institutes-points')
        this.map.removeLayer('clusters')
        this.map.removeLayer('cluster-count')

        this.map.setLayoutProperty('sudamerica-labs', "visibility", "none");
        this.map.setLayoutProperty('africa-labs', "visibility", "visible");

        let vm = this
        this.supercluster.load(vm.institutes);
        this.pointsLayer();
      }

    },
    goToSAmerica() {
      this.map.flyTo({
        center: [-70, -15],
        zoom: 2.6,
      });
      this.mapR = 0;
      this.mapG = 153;
      this.mapB = 204;

      let prevs = this.zoomedto

      this.zoomedto = "SudAmerica";

      if(prevs!='SudAmerica') {
        this.changeLayer('chapters')
        this.map.removeLayer('state-stroke')
        this.addBorders()
        this.map.setPaintProperty('state-fills', 'fill-color', this.hoverMapColor);

        this.map.removeLayer('institutes-points')
        this.map.removeLayer('clusters')
        this.map.removeLayer('cluster-count')

        this.map.setLayoutProperty('sudamerica-labs', "visibility", "visible");
        this.map.setLayoutProperty('africa-labs', "visibility", "none");
        
        let vm = this
        this.supercluster.load(vm.institutes);
        this.pointsLayer();
      }
    },
    pointsLayer() {
      let vm = this;

      this.map.addLayer(
        {
          id: "institutes-points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "custom-marker",
            "icon-allow-overlap": false,
            "icon-size": [
              "interpolate",
              ["linear"],
              ["zoom"],
              2, .3,
              7, .7
            ]
          },
          minzoom: 2,
        },
        "africa-labs"
      );

      /* this.map.addLayer(
        {
          id: "institutes-text",
          type: "symbol",
          source: "points",
          layout: {
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Bold"],
            "text-size": ["interpolate", ["linear"], ["zoom"], 4, 10, 7, 16],
            "text-allow-overlap": false,
            "text-offset": [
              "interpolate",
              ["linear"],
              ["zoom"],
              3,
              ["literal", [0, 2.5]],
              7,
              ["literal", [0, 2]],
            ],
            "text-anchor": "top",
          },
          paint: {
            "text-color": "#000000",
          },
          minzoom: 3.5,
        },
        "institutes-points"
      ); */

      this.map.addLayer(
        {
          id: "clusters",
          type: "circle",
          source: "points",
          layout: {
            visibility: "visible",
          },
          paint: {
            "circle-opacity": 0.8,
            "circle-color": vm.boundariesColor,
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["zoom"],
              2,
              [
                "interpolate",
                ["linear"],
                ["get", "point_count"],
                2,
                12, // at zoom level 2, and point_count 1, set radius to 12
                10,
                30, // at zoom level 2, and point_count 10, set radius to 30
              ],
              5,
              [
                "interpolate",
                ["linear"],
                ["get", "point_count"],
                2,
                24, // at zoom level 10, and point_count 1, set radius to 30
                10,
                60, // at zoom level 10, and point_count 10, set radius to 60
              ],
              7,
              [
                "interpolate",
                ["linear"],
                ["get", "point_count"],
                2,
                36, // at zoom level 10, and point_count 1, set radius to 30
                10,
                80, // at zoom level 10, and point_count 10, set radius to 60
              ],
            ],
          },
          filter: [">", "point_count", 1],
        },
        "institutes-points"
      );

      this.map.addLayer(
        {
          id: "cluster-count",
          type: "symbol",
          source: "points",
          filter: ["has", "point_count"],
          layout: {
            visibility: "visible",
            "text-field": "{point_count}",
            "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            "text-size": 12,
            "text-allow-overlap": true,
          },
        },
        "africa-labs"
      );

      this.map.on("move", () => vm.clusterComputing("points"));

      /* this.map.on("click", "clusters", (e) => {
        let features = vm.map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });

        if (features[0].properties.cluster) {
          vm.map.flyTo({
            center: features[0].geometry.coordinates,
            zoom: vm.supercluster.getClusterExpansionZoom(
              features[0].properties.cluster_id
            ),
          });

          let clusterId = features[0].properties.cluster_id;
          vm.selectedCluster = vm.supercluster.getLeaves(
            clusterId,
            Infinity,
            0
          );
          console.log(vm.selectedCluster);
        }
      }); */
    },
    buildMap() {
      var vm = this;

      this.supercluster = new Supercluster({
        radius: 80,
        maxZoom: vm.maxZoom,
      });

      if (this.map) this.map.remove();

      this.map = new mapboxgl.Map({
        container: this.$refs.map,
        style: "mapbox://styles/interfase/clpia2izt00lu01r529hn37b9?fresh=true",
        zoom: 2,
        maxZoom: vm.maxZoom,
        minZoom: vm.minZoom,
        center: [0, 20],
      });

      //this.map.scrollZoom.disable();
      const nav = new mapboxgl.NavigationControl();
      this.map.addControl(nav, "bottom-left");

      this.map.on("load", () => {
        this.map.addSource("countries", {
          type: "vector",
          url: "mapbox://interfase.1ufwbd36", //mapbox.country-boundaries-v1
        });

        this.map.addSource("titles", {
          type: "vector",
          url: "mapbox://mapbox.mapbox-streets-v8",
        });

        this.map.loadImage("institution.png", (error, image) => {
          if (error) throw error;
          this.map.addImage("custom-marker", image);
        });

        this.map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [],
          },
        });

        //BASEMAP FILL LAYER
        this.map.addLayer(
          {
            id: "state-fills",
            type: "fill",
            source: "countries",
            "source-layer": "ne_10m_admin_0_countries-45dujq",
            paint: {
              "fill-color": vm.hoverMapColor,
              "fill-opacity": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                1,
                0,
              ],
            },
          },
          "country-labels"
        );

        /* this.map.addLayer(
          {
            id: "state-stroke",
            type: "line",
            source: "countries",
            "source-layer": "ne_10m_admin_0_countries-45dujq",
            paint: {
              "line-color": vm.boundariesColor,
              "line-width": .5,
            },
          },
          "state-fills"
        ); */

        //HOVER HALO LAYER
        this.map.addLayer(
          {
            id: "state-halo",
            type: "line",
            source: "countries",
            "source-layer": "ne_10m_admin_0_countries-45dujq",
            paint: {
              "line-color": vm.hoverLineColor,
              "line-opacity": 1,
              "line-width": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                2,
                0,
              ],
            },
          },
          "country-labels"
        );

        this.addBorders();

        this.colorCountries();
        this.supercluster.load(this.institutes);
        this.pointsLayer();
      });

      /* this.map.on("click", "state-fills", (e) => {
        let point = vm.map.queryRenderedFeatures(e.point, {
          layers: ["state-fills"],
        })[0];

        //if it finds a country under hit point
        if (point) {
          console.log(
            point.properties.NAME_EN + " : " + point.properties.ISO_A3
          );
        } else {
          console.log("empty click");
        }
      }); */

      /* this.map.on("mousemove", "state-fills", (e) => {
        var point = vm.map.queryRenderedFeatures(e.point, {
          layers: ["state-fills"],
        });

        //eset hover state
        if (vm.hoveredStateId !== null) {
          vm.map.setFeatureState(
            {
              source: "countries",
              sourceLayer: "ne_10m_admin_0_countries-45dujq",
              id: vm.hoveredStateId,
            },
            {
              hover: false,
            }
          );
        }

        if (point.length) {
          let found = false;
          vm.keys.forEach((d) => {
            if (d[0] == point[0].properties.NAME_EN) found = true; //iso_3166_1_alpha_3
          });

          if (found) {
            vm.displayHover = true;
            vm.hoveredStateId = point[0].id;
            vm.map.setFeatureState(
              {
                source: "countries",
                sourceLayer: "ne_10m_admin_0_countries-45dujq",
                id: vm.hoveredStateId,
              },
              {
                hover: true,
              }
            );
          } else vm.displayHover = false;
        } else vm.displayHover = false;
      }); */

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      /* this.map.on("mouseleave", "state-fills", () => {
        if (vm.hoveredStateId !== null) {
          this.map.setFeatureState(
            {
              source: "countries",
              sourceLayer: "ne_10m_admin_0_countries-45dujq",
              id: vm.hoveredStateId,
            },
            {
              hover: false,
            }
          );
        }
        vm.hoveredStateId = null;
      }); */
    },
    colorCountries() {
      // Build a GL match expression that defines the color for every vector tile feature
      // Use the ISO 3166-1 alpha 3 code as the lookup key for the country shape
      let matchExpression = ["match", ["get", "NAME_EN"]]; //optimally use iso_3166_1_alpha_3

      // Calculate color values for each country based on 'hdi' value
      let max = 0;

      for (const row of this.keys) if (row[1] > max) max = row[1];

      for (const row of this.keys) {
        // Convert the range of data values to a suitable color
        let alpha = row[1] / max + 0.2;
        if (max == 1) alpha = 0.4;

        let color = `rgba(${this.mapR}, ${this.mapG}, ${this.mapB}, ${alpha})`;
        if (row[1] == 0) color = "#e3e3e3";

        matchExpression.push(row[0], color);
      }

      // Last value is the default, used where there is no data
      matchExpression.push(this.baseMapColor);

      // Add layer from the vector tile source to create the choropleth
      // Insert it below the 'admin-1-boundary-bg' layer in the style
      this.map.addLayer(
        {
          id: "countries-data",
          type: "fill",
          source: "countries",
          "source-layer": "ne_10m_admin_0_countries-45dujq",
          paint: {
            "fill-color": matchExpression,
          },
        },
        "state-stroke"
      );
      //this.visibleLayers.push("countries-data");
    },
    addBorders() {
      let matchExpressionBorder = ["match", ["get", "NAME_EN"]];

      for (const row of this.keys) {
        let colorb = this.boundariesColor;

        matchExpressionBorder.push(row[0], colorb);
      }

      matchExpressionBorder.push(this.baseMapColor);

      this.map.addLayer(
        {
          id: "state-stroke",
          type: "line",
          source: "countries",
          "source-layer": "ne_10m_admin_0_countries-45dujq",
          paint: {
            "line-color": matchExpressionBorder,
            "line-width": 0.5,
          },
        },
        "state-fills"
      );
      //this.visibleLayers.push("state-stroke");
    },
  },
  computed: {
    totmembers() {
      let sum = 0
      Object.values(this.members).forEach(v => sum = sum + v)
      return sum ? sum : '-'
    },
    totalumni() {
      let sum = 0
      Object.values(this.alumni).forEach(v => sum = sum + v)
      return sum ? sum : '-'
    },
    totphds() {
      let sum = 0
      Object.values(this.phds).forEach(v => sum = sum + v)
      return sum ? sum : '-'
    },
    totchapters() {
      let sum = 0
      Object.values(this.chapters).forEach(v => sum = sum + v)
      return sum ? sum : '-'
    },
    totlabs() {
      let id = this.zoomedto == 'Africa' ? 'africa-labs' : 'sudamerica-labs'
      if(id && this.map) {
        let features = this.map.queryRenderedFeatures({ layers: [id] });
        return features.length
      }
    },
    hoverMapColor() {
      if(this.zoomedto == 'Africa')
        return "#206020"
      else 
        return "#007399"
    },
    keys() {
      return Object.entries(this.mapData);
    },
    members() {
      if (this.zoomedto == "Africa") return this.$store.getters.getAfrica;
      else return this.$store.getters.getSudAmerica;
    },
    phds() {
      if (this.zoomedto == "Africa") return this.$store.getters.getPhdAfrica;
      else return this.$store.getters.getPhdSudAmerica;
    },
    alumni() {
      if (this.zoomedto == "Africa") return this.$store.getters.getAlumniAfrica;
      else return this.$store.getters.getAlumniSudAmerica;
    },
    chapters() {
      if (this.zoomedto == "Africa")
        return this.$store.getters.getChaptersAfrica;
      else return this.$store.getters.getChaptersSudAmerica;
    },
    institutes() {
      if (this.zoomedto == "Africa")
        return this.$store.getters.getInstitutesAfrica;
      else 
        return this.$store.getters.getInstitutesSudAmerica;
    },
  },
  mounted() {
    this.mapData = this.chapters;
    this.zoomedto = "Africa";

    this.buildMap();

    setTimeout(() => {
      this.goToAfrica();
      this.map.setLayoutProperty('sudamerica-labs', 'visibility', 'none')  
    }, 500);
    
  },
};
</script>



<style lang="scss" scoped>
.map {
  position: relative;
  height: 100vh;
  top: 0;
  bottom: 0;
  width: 100%;
}
.button-filters-1 {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10;
  bottom: 3rem;
  right: 4rem;
  gap: 0.5rem;
}

.button-filters-3 {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10;
  bottom: 3rem;
  left: 4rem;
  gap: 0.5rem;
}

.selected-country h2 {
  font-weight: 600;
  position: fixed;
  top: 2rem;
  z-index: 10;
  right: 4rem;
  font-size: 40px;
  background: #fff;
  padding: 10px;
  margin: 0;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.selected-cluster {
  position: fixed;
  top: 7rem;
  z-index: 10;
  right: 4rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
}

.selected-cluster div {
  background: #fff;
  font-size: 12px;
  color: #000;
  padding: 1em;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

/* button.btn-africa {
  left: 3rem;
}
button.btn-samerica {
  left: 7rem;
} */


.legend {
  position: fixed;
  bottom: 10rem;
  left: 1rem;
  padding: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.institute {
  position: relative;
  background-image: url(../assets/institution.png);
  background-position: right center;
  background-size: 24px 24px;
  padding-right: 30px;
  text-align: left;
  background-repeat: no-repeat;
}
.institute::after {
  content: '';
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  background: #ecd041;
  z-index: -1;
}

.lab {
  background-image: url(../assets/lab.svg);
  background-position: right center;
  background-size: 24px 24px;
  padding-right: 30px;
  text-align: left;
  background-repeat: no-repeat;
}

.legend .cluster {
  position: relative;
  padding-left: 30px;
  text-align: left;
  background-repeat: no-repeat;
}
.legend .cluster::after {
  content: '';
  background: #ecd041;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  border-radius: 50%;
}

.data {
  width: 300px;
  position: fixed;
  bottom: 10rem;
  left: 1rem;
  padding: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 28px;
  text-align: left;
}

.data div {
  cursor: pointer;
}

.num {
  display: inline-block;
  width: 4rem;
  font-weight: 700;
}
</style>