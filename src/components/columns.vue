<template>
  <section class="page-button">
    <h1>columns - size</h1>
    <vb-columns>
      <vb-column size="1/2">COlumn1</vb-column>
      <vb-column>COlumn1</vb-column>
      <vb-column>COlumn1</vb-column>
      <vb-column>COlumn1</vb-column>
    </vb-columns>

    <h1>columns - grid</h1>
    <vb-columns>
      <vb-column grid="1">COlumn1</vb-column>
      <vb-column grid="11">COlumn11</vb-column>
    </vb-columns>

    <vb-columns>
      <vb-column grid="3">COlumn11</vb-column>
      <vb-column grid="3">COlumn11</vb-column>
      <vb-column grid="3">COlumn11</vb-column>
      <vb-column grid="3">COlumn11</vb-column>
    </vb-columns>
  </section>
</template>

<script>
export default {
  name: 'page-columns'
};
</script>
