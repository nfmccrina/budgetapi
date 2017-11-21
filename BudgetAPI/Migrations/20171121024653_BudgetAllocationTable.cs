using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace BudgetAPI.Migrations
{
    public partial class BudgetAllocationTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BudgetAllocations",
                columns: table => new
                {
                    BudgetAllocationID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AllocatedAmountInCents = table.Column<int>(nullable: false),
                    BudgetID = table.Column<int>(nullable: false),
                    CategoryID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BudgetAllocations", x => x.BudgetAllocationID);
                    table.ForeignKey(
                        name: "FK_BudgetAllocation_Budget",
                        column: x => x.BudgetID,
                        principalTable: "Budgets",
                        principalColumn: "BudgetID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BudgetAllocation_Category",
                        column: x => x.CategoryID,
                        principalTable: "Categories",
                        principalColumn: "CategoryID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BudgetAllocations_BudgetID",
                table: "BudgetAllocations",
                column: "BudgetID");

            migrationBuilder.CreateIndex(
                name: "IX_BudgetAllocations_CategoryID",
                table: "BudgetAllocations",
                column: "CategoryID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BudgetAllocations");
        }
    }
}
