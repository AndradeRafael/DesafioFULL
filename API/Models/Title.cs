using System.Collections.Generic;

namespace DesafioFULL_WebAPI.Models
{
    public class Title
    {
        public Title() { }
        public Title(int id, int number, double interest, double fine, int quotaNumbers, int obligatorId, double originalValue)
        {
            this.Id = id;
            this.Number = number;
            this.Interest = interest;
            this.Fine = fine;
            this.QuotaNumbers = quotaNumbers;
            this.ObligatorId = obligatorId;
            this.OriginalValue = originalValue;
        }
        public int Id { get; set; }
        public int Number { get; set; }
        public double Interest { get; set; }
        public double Fine { get; set; }
        public List<Quota> Quota { get; set; }
        public int QuotaNumbers { get; set; }
        public Obligator Obligator { get; set; }
        public int ObligatorId {get; set; }
        public double OriginalValue { get; set; }
    }
}