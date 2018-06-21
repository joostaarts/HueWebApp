<template>
  <div style="height:98vh;">
    <el-container>
      <el-header>
        <h1>{{ this.bridge.name }}</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1', '2']">

            <el-submenu index="1">
              <template slot="title"><font-awesome-icon class="el-icon-menu" icon="home"/>Rooms</template>
              <el-menu-item index="1-1">Living room</el-menu-item>
              <el-menu-item index="1-2">Bed room</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title"><font-awesome-icon class="el-icon-menu" icon="cog"/>Settings</template>
              <el-submenu index="2-1">
                <template slot="title"><font-awesome-icon class="el-icon-menu" icon="sun"/>Scenes</template>
                <el-menu-item v-for="o in Object.keys(scenes)" :key="o" :index="'2-1-' + Object.keys(scenes).indexOf(o)">{{scenes[o].name}}</el-menu-item>
              </el-submenu>

              <el-menu-item index="2-2"><font-awesome-icon class="el-icon-menu" icon="wrench"/>Devices</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main>
          <el-row :gutter="20">
            <el-col :xs="12" :sm="8" :lg="4" v-for="o in Object.keys(lights)" :key="o" :span="6">
                <el-card class="box-card grid-content">

                  <div slot="header" class="clearfix">
                    <el-row>
                      <el-col :xs="24" :sm="20">
                        {{ lights[o].name }}
                      </el-col>
                      <el-col :xs="1" :sm="2" align="center" style="margin-top: 0px;">
                        <el-switch v-model="lights[o].state.on"></el-switch>
                      </el-col>
                    </el-row>
                  </div>

                  <div class="text item">
                    <p>{{'Product name: ' + lights[o].productname }}</p>
                    <p>{{'Model Id: ' + lights[o].modelid }}</p>
                    <p>{{'Manufacturer: ' + lights[o].manufacturername }}</p>
                  </div>
                </el-card>
            </el-col>
          </el-row>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import light from '../mocks/lights'
import scenes from '../mocks/scenes'

export default {
  name: 'huesystem',
  props: ['bridge'],
  methods: {
    partitionArray: function(array, rowNr, itemsPerRow) {
      rowNr -= 1
      return Object.keys(array).slice(
        rowNr * itemsPerRow,
        rowNr * itemsPerRow + itemsPerRow
      )
    }
  },
  data() {
    return {
      lights: light.lightMock,
      scenes: scenes.scenesMock
    }
  },
  mounted() {
  }
}
</script>

<style>
.text {
  font-size: 13px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: auto;
}
.grid-content {
  margin-bottom: 10px;
  /*border-radius: 4px;*/
  /* min-height: 36px;*/
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: rgb(102, 102, 102);
}
.el-header {
  background-color: rgb(87, 87, 87);
}
.el-header h1 {
  color: white;
}
.el-main {
  background-color: rgb(233, 225, 225);
}
.box-card {
  background-color: rgb(211, 211, 211);
}
</style>
