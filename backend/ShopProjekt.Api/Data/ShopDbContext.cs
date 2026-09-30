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
}