using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using CurrencyConverter.API.Model;
using Newtonsoft.Json.Linq;

namespace CurrencyConverter.API
{
    public class RatesDataStore
    {
        
        public static HttpClient client {get; set;}
   
            public static async Task<CurrenciesRates> GetRatesAsync()
            {
                
                client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            
            CurrenciesRates rates = null;
                string path = "http://data.fixer.io/api/latest?access_key=9e85423609403b3aa798e32ddf0c507e";

                HttpResponseMessage response = await client.GetAsync(path);
            
            if (response.IsSuccessStatusCode)
                {
                    rates = await response.Content.ReadAsAsync<CurrenciesRates>();
                //Console.WriteLine(rates);
                return rates;
            }
            else
            {
                throw new Exception(response.ReasonPhrase);
            }
                


            }
    
    }
}