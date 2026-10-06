using Microsoft.EntityFrameworkCore;

namespace ShopProjekt.Api.Models;

public class Produkt
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public string? Beschreibung { get; set; }

    [Precision(18, 2)]
    public decimal Preis { get; set; }

    public int Lagerbestand { get; set; }
    public bool IstAktiv { get; set; } = true;

    public int KategorieId { get; set; }
    public Kategorie? Kategorie { get; set; }
}