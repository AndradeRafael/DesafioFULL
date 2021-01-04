namespace DesafioFULL_WebAPI.Models
{
    public class Obligator
    {
        public Obligator() { }
        public Obligator(int id, string name, string cpf)
        {
            this.Id = id;
            this.Name = name;
            this.CPF = cpf;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string CPF { get; set; }
    }
}