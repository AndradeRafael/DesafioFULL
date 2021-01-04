using System;
using System.Collections.Generic;
using DesafioFULL_WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DesafioFULL_WebAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) { }        
        public DbSet<Title> Titles { get; set; }
        public DbSet<Quota> Quotas { get; set; }
        public DbSet<Obligator> Obligators { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.Entity<Title>()
                .HasData(new List<Title>(){
                    new Title(1, 101010, 0.01, 0.02, 3, 1, 300.00), // id, number, interest, fine, quotaNumbers, obligatorId, originalValue
                });
            
            builder.Entity<Quota>()
                .HasData(new List<Quota>{
                    new Quota(1, 10, 100, Convert.ToDateTime("2020-07-10"), 1), // id, number, value, date, titleId
                    new Quota(2, 11, 100, Convert.ToDateTime("2020-08-10"), 1),
                    new Quota(3, 12, 100, Convert.ToDateTime("2020-09-10"), 1)
                });
            
            builder.Entity<Obligator>()
                .HasData(new List<Obligator>(){
                    new Obligator(1, "Fulano", "31245678951"),
                });
        }
    }
}