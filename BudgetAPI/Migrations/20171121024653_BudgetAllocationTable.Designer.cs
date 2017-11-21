﻿// <auto-generated />
using BudgetAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace BudgetAPI.Migrations
{
    [DbContext(typeof(BudgetContext))]
    [Migration("20171121024653_BudgetAllocationTable")]
    partial class BudgetAllocationTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125");

            modelBuilder.Entity("BudgetAPI.Models.Budget", b =>
                {
                    b.Property<int>("BudgetID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("BeginDate");

                    b.Property<DateTime>("EndDate");

                    b.Property<int>("UserID");

                    b.HasKey("BudgetID");

                    b.HasIndex("UserID");

                    b.ToTable("Budgets");
                });

            modelBuilder.Entity("BudgetAPI.Models.BudgetAllocation", b =>
                {
                    b.Property<int>("BudgetAllocationID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AllocatedAmountInCents");

                    b.Property<int>("BudgetID");

                    b.Property<int>("CategoryID");

                    b.HasKey("BudgetAllocationID");

                    b.HasIndex("BudgetID");

                    b.HasIndex("CategoryID");

                    b.ToTable("BudgetAllocations");
                });

            modelBuilder.Entity("BudgetAPI.Models.Category", b =>
                {
                    b.Property<int>("CategoryID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<int>("UserID");

                    b.HasKey("CategoryID");

                    b.HasIndex("UserID");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("BudgetAPI.Models.Transaction", b =>
                {
                    b.Property<int>("TransactionID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AmountInCents");

                    b.Property<int>("CategoryID");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Description")
                        .IsRequired();

                    b.HasKey("TransactionID");

                    b.HasIndex("CategoryID");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("BudgetAPI.Models.User", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("UserID");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("BudgetAPI.Models.Budget", b =>
                {
                    b.HasOne("BudgetAPI.Models.User")
                        .WithMany()
                        .HasForeignKey("UserID")
                        .HasConstraintName("FK_Budget_User")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("BudgetAPI.Models.BudgetAllocation", b =>
                {
                    b.HasOne("BudgetAPI.Models.Budget")
                        .WithMany()
                        .HasForeignKey("BudgetID")
                        .HasConstraintName("FK_BudgetAllocation_Budget")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("BudgetAPI.Models.Category")
                        .WithMany()
                        .HasForeignKey("CategoryID")
                        .HasConstraintName("FK_BudgetAllocation_Category")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("BudgetAPI.Models.Category", b =>
                {
                    b.HasOne("BudgetAPI.Models.User")
                        .WithMany()
                        .HasForeignKey("UserID")
                        .HasConstraintName("FK_Category_User")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("BudgetAPI.Models.Transaction", b =>
                {
                    b.HasOne("BudgetAPI.Models.Category")
                        .WithMany()
                        .HasForeignKey("CategoryID")
                        .HasConstraintName("FK_Transaction_Category")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
