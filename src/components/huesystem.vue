
<template>
  <div>
    <h1>Hue Lights</h1>
    <h4>{{ this.bridgeId }}</h4>

    <el-row :gutter="20">
      <el-col :xs="12" :sm="8" :lg="6" v-for="o in Object.keys(lights)" :key="o" :span="6">
          <el-card class="box-card grid-content">

            <div slot="header" class="clearfix">
              <el-row>
                <el-col :xs="24" :sm="20">
                  {{'Light ' + lights[o].name }}
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
  </div>
</template>

<script>
import light from './lights'

export default {
  name: 'huesystem',
  props: ['bridgeId'],
  methods: {
    partitionArray: function(array, rowNr, itemsPerRow) {
      rowNr -= 1
      return Object.keys(array).slice(rowNr * itemsPerRow, rowNr * itemsPerRow + itemsPerRow)
    }
  },
  data() {
    return {
      lights: light.lightMock
    }
  },
  mounted() {}
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
</style>
