using System;

namespace DesafioFULL_WebAPI.Models
{
    public class Quota
    {
        public Quota() { }
        public Quota(int id, int number, int value, DateTime date, int titleId)
        {
            this.Id = id;
            this.Number = number;
            this.Value = value;
            this.Date = date;
            this.TitleId = titleId;
        }
        public int Id { get; set; }
        public int Number { get; set; }
        public int Value { get; set; }
        public DateTime Date { get; set; }
        public int TitleId { get; set; }
        public Title Title {get; set; }
    }
}