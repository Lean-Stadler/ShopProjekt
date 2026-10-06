using Microsoft.EntityFrameworkCore;
using ShopProjekt.Api.Models;

namespace ShopProjekt.Api.Data;

public class ShopDbContext : DbContext
{
    public ShopDbContext(DbContextOptions<ShopDbContext> options)
        : base(options)
    {
    }

    public DbSet<Kunde> Kunden { get; set; }
    public DbSet<Kategorie> Kategorien { get; set; }
    public DbSet<Produkt> Produkte { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Produkt>()
            .HasOne(p => p.Kategorie)
            .WithMany(k => k.Produkte)
            .HasForeignKey(p => p.KategorieId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}