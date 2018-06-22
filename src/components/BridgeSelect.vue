<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
       <span>Select your bridge</span>
       <el-button style="float: right; padding: 3px 0" type="text">Refresh</el-button>
      </div>

      <el-table border :default-expand-all="bridges.length === 1" :show-header="false" :data="bridges" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <p>Bridge ID: {{ props.row.smallconfig.bridgeid }}</p>
            <p>Model: {{ props.row.modelname }}</p>
            <p>Software version: {{ props.row.smallconfig.swversion }}</p>
            <p>Url Base: <a :href="props.row.urlbase" target="_">{{props.row.urlbase}}</a></p>
          </template>
        </el-table-column>

        <el-table-column label="Name" prop="smallconfig.name">
        </el-table-column>

        <el-table-column label="IP" prop="ipAddress">
        </el-table-column>

        <el-table-column label="Command">
          <template slot-scope="scope">
            <div align="center">
              <el-button size="mini" @click="selectBridge(scope.row)">Select</el-button>
            </div>
          </template>
        </el-table-column>

      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'bridgeselect',
  methods: {
    selectBridge: function(bridge) {
      this.$router.push({ name: 'huesystem', params: { bridge: bridge } })
    }
  },
  mounted() {
    var that = this
    this.$http.get('http://localhost:8080/api/bridges').then(
      function(response) {
        console.log(response.data[0])
        that.bridges = response.data
      },
      function(error) {
        that.bridge = []
        console.log(error.statusText)
      }
    )
  },
  data() {
    return {
      msg: 'Select your bridge',
      bridges: []
    }
  }
}
</script>

<style>
.text {
  font-size: 14px;
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
  width: 480px;
}
</style>
