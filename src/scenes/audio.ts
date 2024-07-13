export default {
  resource: {},

  play: function (key) {
    if (!this.resource[key].isPlaying) {
      this.resource[key].play();
    }
  },

  stop: function (key) {
    if (this.resource[key].isPlaying) {
      this.resource[key].stop();
    }
  },

  bgmPlay: function (key, e, o) {
    if (!this.resource[key].isPlaying) {
      const soundConfig: Phaser.Types.Sound.SoundConfig = {
        loop: true,
      };

      this.resource[key].addMarker({
        name: "default",
        start: e / 48e3,
        duration: o / 48e3 - e / 48e3,
        config: soundConfig,
      });

      this.resource[key].play("default");
    }
  },
};
