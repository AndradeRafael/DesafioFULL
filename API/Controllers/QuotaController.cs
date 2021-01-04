using System;
using DesafioFULL_WebAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace DesafioFULL_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuotaController : ControllerBase
    {
        private readonly IRepository repository;

        public QuotaController(IRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public IActionResult Get(){
            try
            {
                return Ok("OK");
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}