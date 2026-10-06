namespace ShopProjekt.Api.Models
{
    public class Kategorie
    {

        public int Id { get; set; }
        public required string Name { get; set; }
        public List<Produkt> Produkte { get; set; } = new();
    }
}
