using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Trader.Models;

namespace Trader.Controllers
{
    [Route("api/[controller]={p_code}")]
    [ApiController]
    public class CodeController : ControllerBase
    {
        [HttpGet]
        public Idt GetIdt(string p_code)
        {
            Idt idt = new Idt();
            return idt.fetchIdt(p_code);
        }
    }
}
