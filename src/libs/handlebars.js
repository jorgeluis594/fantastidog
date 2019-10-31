const format = require('date-format');
const helpers = {};

helpers.eq = (val1,val2)=>{
    if(val1 == 1) {return '<td><a href="/agregar_pago/'.concat(val2,'">','<span class="badge badge-danger">Sin pago</span></a></td>');}
    if(val1==2) {return '<td><span class="badge badge-warning">Adelantó</span></td>';}
    if(val1==3) {return '<td><span class="badge badge-success">Cancelo</span></td>';}
};
helpers.dateformat = (date)=>{
    return format.asString('dd-MM-yyyy',date);
};
module.exports=helpers;