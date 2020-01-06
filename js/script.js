const scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy, {});

const sidenav = document.querySelector(".sidenav");
M.Sidenav.init(sidenav, {});

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transitipn: 500,
  interval: 6000
});

const autocomplete = document.querySelector(".autocomplete");
M.Autocomplete.init(autocomplete, {
  data: {
    "Aruba": null,
    "Cancun": null,
    "Cuba": null,
    "Hawaii": null,
    "Florida": null,
    "California": null,
    "Jamaica": null,
    "Bahamas": null,
    "Nova Scotia": null
  }
});

const materialBoxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBoxed, {});
