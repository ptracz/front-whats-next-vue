<template>
  <div class="box">
    <div class="row navbar outlined" contenteditable>
      {{ lorem }}
    </div>
    <div class="row content">
      <div class="box">
        <div class="row map">
          {{lorem}}
        </div>
        <div class="row table" contenteditable>
          {{ table }}
        </div>
      </div>
      <div class="legend">
        {{ lorem }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data: () => ({
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, nulla sed hendrerit volutpat, nibh nunc tempor tellus, eu aliquam dui libero id odio. Nunc fringilla eu quam quis sagittis. Cras volutpat a nunc eu hendrerit. Quisque consequat scelerisque erat vel ultricies. Sed sed facilisis ante. Pellentesque nec magna a libero tristique fringilla. Phasellus egestas, ante id dignissim viverra, justo nisi laoreet leo, in malesuada augue turpis quis sapien. Aenean imperdiet quis augue sit amet ultricies. Mauris mollis, dui ac commodo faucibus, felis turpis iaculis augue, et tincidunt sapien enim non lorem. Mauris vitae consequat massa. Ut odio arcu, tristique in neque ut, elementum fermentum ante. Curabitur dictum congue nisl, vulputate mattis metus imperdiet imperdiet. Vestibulum molestie, arcu sed accumsan iaculis, nulla ipsum tempus erat, euismod feugiat velit lectus quis lorem. Nullam venenatis dapibus tortor, non aliquam magna sagittis a.',
    table: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, nulla sed hendrerit volutpat, nibh nunc tempor tellus, eu aliquam dui libero id odio. Nunc fringilla eu quam quis sagittis. Cras volutpat a nunc eu hendrerit. Quisque consequat scelerisque erat vel ultricies. Sed sed facilisis ante. Pellentesque nec magna a libero tristique fringilla. Phasellus egestas, ante id dignissim viverra, justo nisi laoreet leo, in malesuada augue turpis quis sapien. Aenean imperdiet quis augue sit amet ultricies. Mauris mollis, dui ac commodo faucibus, felis turpis iaculis augue, et tincidunt sapien enim non lorem. Mauris vitae consequat massa. Ut odio arcu, tristique in neque ut, elementum fermentum ante. Curabitur dictum congue nisl, vulputate mattis metus imperdiet imperdiet. Vestibulum molestie, arcu sed accumsan iaculis, nulla ipsum tempus erat, euismod feugiat velit lectus quis lorem. Nullam venenatis dapibus tortor, non aliquam magna sagittis a.'
  }),
}
</script>

<style scoped lang="scss">
.box {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: row;
}
.box .row.table {
  flex: 0 0 900px;
}
.box .row.map {
  flex: 1 1 auto;
}
.box .row.navbar {
  flex: 0 1 auto;
}
.box .row.content {
  flex: 1 1 auto;
}
.row.content .box{
  flex: 0 0 71%;
}
.box .row {
  border: 1px dotted red;
}
.legend {
  flex: 1 1 auto;
}
</style>