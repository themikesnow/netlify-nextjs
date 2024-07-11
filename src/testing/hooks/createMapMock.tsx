/* eslint-disable */
const createMapMock = (): any => {
  const maps = {
    InfoWindow: jest.fn().mockImplementation(function () {}),
    Map: jest.fn().mockImplementation(function (mapDiv, opts) {
      return {
        fitBounds: jest.fn(),
        panToBounds: jest.fn(),
      };
    }),
    Polyline: function Polyline() {},
    Size: function Size() {},
    LatLngBounds: jest.fn().mockReturnValue({
      extend: jest.fn(),
    }),
    LatLng: jest.fn(),
    Marker: jest.fn().mockReturnValue({
      getPosition: jest.fn(),
    }),
    event: {
      addListener: jest.fn(),
    },
  };
  return { maps };
};

export { createMapMock };
export default createMapMock;
