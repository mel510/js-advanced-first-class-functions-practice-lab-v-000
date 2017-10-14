// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return total += driver.revenue
  }, 0); //0 is second arg for reduce, current/initial value
};

const averageRevenue = function (drivers) {
  return (totalRevenue(drivers) / drivers.length);
};
