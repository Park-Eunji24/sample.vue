new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      tab: null,
      machine: [
      {
        mid: 'Puma280',
        idx: 1,
        process: 'CS98D25H49-01-2',
        timer: '가공완료',
        count: '100/100',
        fTime: '0 시간 6 분' },


      {
        mid: 'PumaV400',
        idx: 2,
        process: 'O0229',
        timer: '04:34',
        count: '4/100',
        fTime: '84 시간 40 분' },


      {
        mid: 'Lynx220C',
        idx: 3,
        process: 'D580007-02-F',
        timer: '01:33',
        count: '459/500',
        fTime: '2 시간 36 분' },


      {
        mid: 'Puma240',
        idx: 4,
        process: 'WGR150D35H24-02-1',
        timer: '00:10',
        count: '70/100',
        fTime: '1 시간 31 분' },


      {
        mid: 'Lynx220CL',
        idx: 5,
        process: 'CS98D25H49-02-02',
        timer: '02:34',
        count: '12/100',
        fTime: '5 시간 0 분' },


      {
        mid: 'Lynx220SY',
        idx: 6,
        process: 'JIG-CD',
        timer: 'READY',
        count: '110/200',
        fTime: '23 시간 48 분' }] };




  } });