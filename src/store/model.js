const VuexModel = {
  // You can use it as state property
  state: {
    isAuthenticated: false
  },
  navigation: {
    navbar: {
      currentTab: "info"
    },
    service: {
      step: "type",
      type: "camanances",
      hour: null,
      place: null,
      payment: "cash",
      adviser: null
    }
  }
};

export default VuexModel;
