var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

function calculateSalesTax(salesData, taxRates) {

    var output = {};
    
    for (var i = 0; i < salesData.length; i++) {

        var name = salesData[i]["name"];
        var province = salesData[i]["province"];
        var sales = salesData[i]["sales"].reduce((a, b) => a + b, 0);
        var taxAmonut = sales * taxRates[province];

        if (output[name]) {
            output[name].totalSales += sales;
            output[name].totalTaxes += taxAmonut;
        } else {            
            output[name] = {totalSales: sales, totalTaxes: taxAmonut};      
        } 
    }
    console.log(output);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/