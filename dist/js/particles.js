(async () => {
  await tsParticles.load("tsparticles", {
    autoPlay: true,
    detectRetina: true,
    fpsLimit: 120,
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: true,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: { value: "#6d28d9" },
      shape: {
        type: "circle",
        close: true,
        fill: true,
        options: {},
      },
      stroke: { width: 0 },
      opacity: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: {
          min: 0.1,
          max: 1,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 0.25,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      size: {
        value: 3,
        random: {
          enable: true,
          minimumValue: 1,
        },
        animation: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      links: {
        blink: false,
        color: {
          value: "#6d28d9",
        },
        opacity: 0.4,
        consent: true,
        distance: 125,
        enable: true,
        frequency: 1,
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: ["repulse"],
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
        },
        push: {
          default: true,
          groups: [],
          quantity: 2,
        },
        remove: { quantity: 2 },
        slow: {
          factor: 3,
          radius: 200,
        },
      },
    },
  });
})();
