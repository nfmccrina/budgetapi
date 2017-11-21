using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BudgetAPI.Models
{
    public class BudgetContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Budget> Budgets { get; set; }
        public DbSet<BudgetAllocation> BudgetAllocations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=budget.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(u => u.Name)
                .IsRequired();

            modelBuilder.Entity<User>().HasIndex(u => u.Name).IsUnique();

            modelBuilder.Entity<Category>()
                .Property(c => c.Name)
                .IsRequired();

            modelBuilder.Entity<Category>()
                .HasOne<User>()
                .WithMany()
                .HasForeignKey(x => x.UserID)
                .HasConstraintName("FK_Category_User");

            modelBuilder.Entity<Transaction>().Property(t => t.AmountInCents).IsRequired();
            modelBuilder.Entity<Transaction>().Property(t => t.Date).IsRequired();
            modelBuilder.Entity<Transaction>().Property(t => t.Description).IsRequired();
            modelBuilder.Entity<Transaction>().Property(t => t.CategoryID).IsRequired();

            modelBuilder.Entity<Transaction>()
                .HasOne<Category>()
                .WithMany()
                .HasForeignKey(t => t.CategoryID)
                .HasConstraintName("FK_Transaction_Category");

            modelBuilder.Entity<Budget>().Property(b => b.BeginDate).IsRequired();
            modelBuilder.Entity<Budget>().Property(b => b.EndDate).IsRequired();
            modelBuilder.Entity<Budget>().Property(b => b.UserID).IsRequired();

            modelBuilder.Entity<Budget>()
                .HasOne<User>()
                .WithMany()
                .HasForeignKey(b => b.UserID)
                .HasConstraintName("FK_Budget_User");

            modelBuilder.Entity<BudgetAllocation>().Property(b => b.AllocatedAmountInCents).IsRequired();
            modelBuilder.Entity<BudgetAllocation>().Property(b => b.CategoryID).IsRequired();
            modelBuilder.Entity<BudgetAllocation>().Property(b => b.BudgetID).IsRequired();

            modelBuilder.Entity<BudgetAllocation>()
                .HasOne<Category>()
                .WithMany()
                .HasForeignKey(b => b.CategoryID)
                .HasConstraintName("FK_BudgetAllocation_Category");

            modelBuilder.Entity<BudgetAllocation>()
                .HasOne<Budget>()
                .WithMany()
                .HasForeignKey(b => b.BudgetID)
                .HasConstraintName("FK_BudgetAllocation_Budget");
        }
    }
}
