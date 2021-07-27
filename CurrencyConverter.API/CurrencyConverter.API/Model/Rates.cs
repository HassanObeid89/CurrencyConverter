using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Newtonsoft.Json.Linq;

namespace CurrencyConverter.API.Model
{
    public class CurrenciesRates
    {

        public Boolean Success { get; set; }
        public string Base { get; set; }
        public object Rates { get; set; }

    }
}
