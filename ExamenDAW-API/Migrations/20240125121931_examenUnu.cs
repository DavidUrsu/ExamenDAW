using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ExamenDAWAPI.Migrations
{
    /// <inheritdoc />
    public partial class examenUnu : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cartes",
                columns: table => new
                {
                    CarteId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cartes", x => x.CarteId);
                });

            migrationBuilder.CreateTable(
                name: "Edituras",
                columns: table => new
                {
                    EdituraId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Edituras", x => x.EdituraId);
                });

            migrationBuilder.CreateTable(
                name: "Autors",
                columns: table => new
                {
                    AutorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EdituraId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Autors", x => x.AutorId);
                    table.ForeignKey(
                        name: "FK_Autors_Edituras_EdituraId",
                        column: x => x.EdituraId,
                        principalTable: "Edituras",
                        principalColumn: "EdituraId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CarteAutors",
                columns: table => new
                {
                    AutorId = table.Column<int>(type: "int", nullable: false),
                    CarteId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarteAutors", x => new { x.CarteId, x.AutorId });
                    table.ForeignKey(
                        name: "FK_CarteAutors_Autors_AutorId",
                        column: x => x.AutorId,
                        principalTable: "Autors",
                        principalColumn: "AutorId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CarteAutors_Cartes_CarteId",
                        column: x => x.CarteId,
                        principalTable: "Cartes",
                        principalColumn: "CarteId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Autors_EdituraId",
                table: "Autors",
                column: "EdituraId");

            migrationBuilder.CreateIndex(
                name: "IX_CarteAutors_AutorId",
                table: "CarteAutors",
                column: "AutorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarteAutors");

            migrationBuilder.DropTable(
                name: "Autors");

            migrationBuilder.DropTable(
                name: "Cartes");

            migrationBuilder.DropTable(
                name: "Edituras");
        }
    }
}
