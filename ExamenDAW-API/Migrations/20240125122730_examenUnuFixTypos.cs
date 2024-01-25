using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ExamenDAWAPI.Migrations
{
    /// <inheritdoc />
    public partial class examenUnuFixTypos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Autors_Edituras_EdituraId",
                table: "Autors");

            migrationBuilder.DropForeignKey(
                name: "FK_CarteAutors_Autors_AutorId",
                table: "CarteAutors");

            migrationBuilder.DropForeignKey(
                name: "FK_CarteAutors_Cartes_CarteId",
                table: "CarteAutors");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Edituras",
                table: "Edituras");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cartes",
                table: "Cartes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CarteAutors",
                table: "CarteAutors");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Autors",
                table: "Autors");

            migrationBuilder.RenameTable(
                name: "Edituras",
                newName: "Edituri");

            migrationBuilder.RenameTable(
                name: "Cartes",
                newName: "Carti");

            migrationBuilder.RenameTable(
                name: "CarteAutors",
                newName: "CarteAutori");

            migrationBuilder.RenameTable(
                name: "Autors",
                newName: "Autori");

            migrationBuilder.RenameIndex(
                name: "IX_CarteAutors_AutorId",
                table: "CarteAutori",
                newName: "IX_CarteAutori_AutorId");

            migrationBuilder.RenameIndex(
                name: "IX_Autors_EdituraId",
                table: "Autori",
                newName: "IX_Autori_EdituraId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Edituri",
                table: "Edituri",
                column: "EdituraId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Carti",
                table: "Carti",
                column: "CarteId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CarteAutori",
                table: "CarteAutori",
                columns: new[] { "CarteId", "AutorId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Autori",
                table: "Autori",
                column: "AutorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Autori_Edituri_EdituraId",
                table: "Autori",
                column: "EdituraId",
                principalTable: "Edituri",
                principalColumn: "EdituraId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CarteAutori_Autori_AutorId",
                table: "CarteAutori",
                column: "AutorId",
                principalTable: "Autori",
                principalColumn: "AutorId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CarteAutori_Carti_CarteId",
                table: "CarteAutori",
                column: "CarteId",
                principalTable: "Carti",
                principalColumn: "CarteId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Autori_Edituri_EdituraId",
                table: "Autori");

            migrationBuilder.DropForeignKey(
                name: "FK_CarteAutori_Autori_AutorId",
                table: "CarteAutori");

            migrationBuilder.DropForeignKey(
                name: "FK_CarteAutori_Carti_CarteId",
                table: "CarteAutori");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Edituri",
                table: "Edituri");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Carti",
                table: "Carti");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CarteAutori",
                table: "CarteAutori");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Autori",
                table: "Autori");

            migrationBuilder.RenameTable(
                name: "Edituri",
                newName: "Edituras");

            migrationBuilder.RenameTable(
                name: "Carti",
                newName: "Cartes");

            migrationBuilder.RenameTable(
                name: "CarteAutori",
                newName: "CarteAutors");

            migrationBuilder.RenameTable(
                name: "Autori",
                newName: "Autors");

            migrationBuilder.RenameIndex(
                name: "IX_CarteAutori_AutorId",
                table: "CarteAutors",
                newName: "IX_CarteAutors_AutorId");

            migrationBuilder.RenameIndex(
                name: "IX_Autori_EdituraId",
                table: "Autors",
                newName: "IX_Autors_EdituraId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Edituras",
                table: "Edituras",
                column: "EdituraId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cartes",
                table: "Cartes",
                column: "CarteId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CarteAutors",
                table: "CarteAutors",
                columns: new[] { "CarteId", "AutorId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Autors",
                table: "Autors",
                column: "AutorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Autors_Edituras_EdituraId",
                table: "Autors",
                column: "EdituraId",
                principalTable: "Edituras",
                principalColumn: "EdituraId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CarteAutors_Autors_AutorId",
                table: "CarteAutors",
                column: "AutorId",
                principalTable: "Autors",
                principalColumn: "AutorId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CarteAutors_Cartes_CarteId",
                table: "CarteAutors",
                column: "CarteId",
                principalTable: "Cartes",
                principalColumn: "CarteId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
