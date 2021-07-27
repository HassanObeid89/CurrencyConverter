using System;
using System.Collections.Generic;
using System.Net.Http;
using CurrencyConverter.API.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace CurrencyConverter.API.Controller
{
    [ApiController]
    [Route("api/rates")]
    
    public class CurrenciesController : ControllerBase
    {
        [HttpGet()]
        public JsonResult GetRates()
        {
           
            
            return new JsonResult(RatesDataStore.GetRatesAsync());
            
        }

    }
}
