namespace ShopProjekt.Api.Models;

public class Kunde
{
    public int Id { get; set; }
    public required string Vorname { get; set; }
    public required string Nachname { get; set; }
    public required string Email { get; set; }
}