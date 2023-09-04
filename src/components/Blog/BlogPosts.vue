<script setup>
defineProps({
  views:{ 
      type: Number
  },
  title:{ 
      type: String
  },
  date:{ 
      type: String
  },
  content:{ 
      type: String
  },
  auther:{ 
      type: String
  },
  cat:{ 
      type: String
  }
})

</script>


<template>
  <div class="box">
    <span class="views">{{ views }}</span>
    <h3 class="title">{{ title }}</h3>
    <span class="date">{{ date }}</span>
    <p class="content">{{ $filters.shortenText(content,50) }}</p>
       <div class="row ">
        <div class="col-sm-6 mt-100">
          <span class="auther">{{ auther }}</span>
        </div>
        <div class="col-sm-6">
          <span class="cat">{{ cat }}</span>
        </div>
       </div>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    .views {
      position: absolute;
      top: 5px;
      right: 5px;
      background-color: #4caf50;
      border-radius: 4px;
      padding: 1px 5px;
      color: white;
      text-align: center;
      font-weight: bold;
    }
    .title {
      color: #535353;
    }
    .date {
      display: block;
      padding: 0 0 5px;
      color: #888;
      font-size: 14px;
    }
    .content {
      line-height: 1.8;
      color: #666;
    }
    .auther, .cat {
      display: inline-block;
      min-width: 100px;
      text-align: center;
      background-color: #000;
      padding: 6px 10px;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
    .cat {
      background-color: #e91e63;
    }
    .row > div:last-child {
      text-align: end;
    }
  }
</style>