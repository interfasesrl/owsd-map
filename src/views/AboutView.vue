<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div class="map" ref="map"></div>

    <div class="selected-country">
      <h2 :style="'color: rgb('+this.mapR+','+this.mapG+','+this.mapB+')'">{{ this.selectedCountry }}</h2>
    </div>

    <div class="button-filters-1">
      <button @click="changeLayer(phds)">Phds</button>
      <button @click="changeLayer(members)">Members</button>
      <button @click="changeLayer(alumni)">Alumni</button>
    </div>
    
    <div class="button-filters-3">
      <button class="btn-africa" @click="goToAfrica()">Africa</button>
      <button class="btn-samerica" @click="goToSAmerica()">Sud America</button>
    </div>
    

  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiaW50ZXJmYXNlIiwiYSI6ImNqYW8zZGJkeTRjNXQzNHIxYmJpMWF6MnkifQ.TfWAUiqo6rDYVGid30Q6sA";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  name: "About",
  data() {
    return {
      map: null,
      mapData: null,
      zoomedto: "",
      countryKeys: [],
      boundariesColor: "#ecd041",
      baseMapColor: "#b0b0b0",
      hoverMapColor: "#206020",
      hoverLineColor: "#ecd041",
      selectedCountry: '',
      mapR: 45,
      mapG: 134,
      mapB: 45,
      /* tooltip_top: 0,
      tooltip_left: 0,
      hoverMembers: 0, */
      displayHover: false
    };
  },
  methods: {
    fetchMapData() {
      this.countryKeys = Object.entries(this.mapData);
    },
    changeLayer(data) {
      this.mapData = data
      if (this.map) {
        this.map.removeLayer('countries-data')
        this.map.removeLayer('countries-titles')
        this.colorCountries()
      }
    },
    goToAfrica() {
      this.map.flyTo({
        center: [20, 0],
        zoom: 3,
      })
      this.mapR = 45
      this.mapG = 134
      this.mapB = 45
      this.zoomedto = 'Africa'
      this.changeLayer(this.members)
    },
    goToSAmerica() {
      this.map.flyTo({
        center: [-70, -30],
        zoom: 2.9,
      })
      this.mapR = 0
      this.mapG = 153
      this.mapB = 204
      this.zoomedto = 'SudAmerica'
      this.changeLayer(this.members)
    },
    buildMap() {
      var vm = this;

      if (this.map) this.map.remove();

      this.map = new mapboxgl.Map({
        container: this.$refs.map,
        style: "mapbox://styles/interfase/clpia2izt00lu01r529hn37b9?fresh=true",
        zoom: 2,
        center: [0, 20],
      });

      this.map.scrollZoom.disable();
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

        this.map.addLayer(
          {
            id: "state-stroke",
            type: "line",
            source: "countries",
            "source-layer": "ne_10m_admin_0_countries-45dujq",
            paint: {
              "line-color": vm.boundariesColor,
              "line-width": 0.3,
            },
          },
          "state-fills"
        );

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

        this.colorCountries();
      });

      vm = this

      this.map.on("click", function (e) {
        var point = vm.map.queryRenderedFeatures(e.point, {
          layers: ["state-fills"],
        })[0];

        //if it finds a country under hit point
        if (point) {
          console.log(point.properties.NAME_EN, point.properties.ISO_A3);
          vm.selectedCountry = point.properties.NAME_EN
        } else {
          console.log('empty click');
        }

      });

      let hoveredStateId = null;
      this.map.on("mousemove", function (e) {
        var point = vm.map.queryRenderedFeatures(e.point, {
          layers: ["state-fills"],
        });

        //eset hover state 
        if (hoveredStateId !== null) {
          vm.map.setFeatureState(
            {
              source: "countries",
              sourceLayer: "ne_10m_admin_0_countries-45dujq",
              id: hoveredStateId,
            },
            {
              hover: false,
            }
          );
        }

        if (point.length) {
          let found = false;
          vm.countryKeys.forEach((d) => {
            if (d[0] == point[0].properties.NAME_EN) found = true; //iso_3166_1_alpha_3
          });

          if (found) {
            vm.displayHover = true;
            hoveredStateId = point[0].id;
            vm.map.setFeatureState(
              {
                source: "countries",
                sourceLayer: "ne_10m_admin_0_countries-45dujq",
                id: hoveredStateId,
              },
              {
                hover: true,
              }
            );
            /* vm.countryKeys.forEach((d) => {
              if (d[0] == point[0].properties.NAME_EN) { //iso_3166_1_alpha_3
                vm.tooltip_top = e.point.y - 30;
                vm.tooltip_left = e.point.x + 30;
                vm.hoverMembers = d[1];
              }
            }); */
          } else vm.displayHover = false;
        } else vm.displayHover = false;
      });

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      this.map.on("mouseleave", "state-fills", () => {
        if (hoveredStateId !== null) {
          this.map.setFeatureState(
            {
              source: "countries",
              sourceLayer: "ne_10m_admin_0_countries-45dujq",
              id: hoveredStateId,
            },
            {
              hover: false,
            }
          );
        }
        hoveredStateId = null;
      });
    },
    colorCountries() {
      // Build a GL match expression that defines the color for every vector tile feature
      // Use the ISO 3166-1 alpha 3 code as the lookup key for the country shape
      const matchExpression = ["match", ["get", "NAME_EN"]]; //optimally use iso_3166_1_alpha_3
      const matchExpressionTitle = ['match', ['get', 'name_en']];

      // Calculate color values for each country based on 'hdi' value
      var max = 0;
      var keys = [];
      //if (this.selectedWG == 0)
        keys = Object.entries(this.mapData);
      //else keys = Object.entries(this.mapData.workgroup.country);

      for (const row of keys) if (row[1] > max) max = row[1];

      for (const row of keys) {
        // Convert the range of data values to a suitable color
        const alpha = row[1] / max + 0.2;
        let color = `rgba(${this.mapR}, ${this.mapG}, ${this.mapB}, ${alpha})`;
        if(row[1] == 0)
          color = '#e3e3e3'
        
        // Convert the range of data values to the country name or to the number for the value
        const title = row[1] > 0 ? row[1] : '';
        let titlec = `${title}`;

        matchExpression.push(row[0], color);
        matchExpressionTitle.push(row[0], titlec);
      }

      // Last value is the default, used where there is no data
      matchExpression.push(this.baseMapColor);
      matchExpressionTitle.push('')

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
          }
        },
        "state-stroke"
      );

      this.map.addLayer({
        id: "countries-titles",
        type: "symbol",
        source: "titles",
        "source-layer": "place_label",
        layout: {
          "text-field": matchExpressionTitle,
          "text-size": 14,
          "text-anchor": "top",
        },
        paint: {
          "text-color": "#fff"
        }
      });
      
    },
  },
  computed: {
    members() {
      if(this.zoomedto == 'Africa')
        return this.$store.getters.getAfrica
      else 
        return this.$store.getters.getSudAmerica

    },
    phds() {
      if(this.zoomedto == 'Africa')
        return this.$store.getters.getphds
      else  
        return this.$store.getters.getPhdSudAmerica
    },
    alumni() {
      if(this.zoomedto == 'Africa')
        return this.$store.getters.getAlumniAfrica
      else  
        return this.$store.getters.getAlumniSudAmerica
    }
  },
  async mounted() {
    this.mapData = {
      tot: {
        members: "427",
        programs: "90",
        materials: "78",
        evaluations: "3",
        projects: "11",
      },
      all_workgroups: {
        country: {
          ITA: 54,
          DNK: 16,
          DEU: 76,
          ESP: 35,
          CHE: 7,
          NLD: 22,
          SVN: 4,
          ISR: 5,
          GBR: 9,
          IRL: 6,
          LUX: 2,
          NOR: 1,
          POL: 3,
          MLT: 1,
          CZE: 10,
          FRA: 18,
          FIN: 6,
          BEL: 6,
          SVK: 2,
          CYP: 1,
          HUN: 9,
          ROU: 9,
          EGY: 3,
          GRC: 9,
          PRT: 5,
          AUT: 8,
          LVA: 3,
          BGR: 2,
          TUR: 11,
          IND: 5,
          AUS: 1,
          USA: 10,
          HRV: 1,
          SWE: 3,
          UKR: 7,
          RUS: 1,
          BGD: 1,
          HKG: 1,
          THA: 1,
          CHN: 3,
          JPN: 2,
          CAN: 3,
          IRN: 1,
          EST: 1,
          PAK: 1,
          MKD: 1,
          CMR: 1,
          country_non_settato: 40,
        },
        members: {
          tot: 427,
          experience_1: 55,
          experience_2: 30,
          experience_3: 74,
          experience_non_settato: 268,
        },
        members_roles: {
          Consultant: 38,
          Educator: 97,
          "Event organizer": 44,
          Researcher: 110,
          "Science communicator": 47,
          "Tool builder": 30,
          "Other (specify)": 3,
          role_non_settato: 273,
        },
      },
    };
    
    this.mapData = this.members

    this.fetchMapData(); 

    await this.buildMap();
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
  gap: .5rem;
}


.button-filters-3 {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10;
  bottom: 3rem;
  left: 4rem;
  gap: .5rem;
}

.selected-country {
  font-weight: 600;
  position: fixed;
  top: 2rem;
  z-index: 10;
  right: 4rem;
  font-size: 28px;
}

/* button.btn-africa {
  left: 3rem;
}
button.btn-samerica {
  left: 7rem;
} */
</style>