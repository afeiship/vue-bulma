<template>
  <section class="page-card">
    <div class="cont">
      <vb-card>
        <vb-card-header>
          <vb-card-header-title>This is card title</vb-card-header-title>
        </vb-card-header>
        <vb-card-image>
          <vb-image
            ratio="4:3"
            src="https://bulma.io/images/placeholders/1280x960.png"
          ></vb-image>
        </vb-card-image>
        <vb-card-content>
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">FeiZheng</p>
              <p class="subtitle is-6">@afeiship</p>
            </div>
          </div>
          <p>
            时钟滴答滴答，一秒一秒的走着，毫无表情，不缓不急，过去了就是过去了，或许，有很多事情，
            我们会缅怀，会留恋，会铭刻，会珍藏，但那还是属于过去，还是被盖上了刻有&ldquo;曾经&rdquo;两字的印章，来不及细思量
          </p>
        </vb-card-content>
        <vb-card-footer>
          <vb-card-footer-item>
            <a href="#">Save</a>
          </vb-card-footer-item>
          <vb-card-footer-item>
            <a href="#">Edit</a>
          </vb-card-footer-item>
        </vb-card-footer>
      </vb-card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'page-card'
};
</script>

<style lang="scss">
.cont {
  width: 500px;
  margin: 0 auto;
}
</style>
