﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI.Models;

namespace WebAPI.Migrations
{
    [DbContext(typeof(PaymentDetailsContext))]
    [Migration("20190628195251_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPI.Models.PaymentDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CardCvv")
                        .IsRequired()
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("CardExpirationDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(5)");

                    b.Property<string>("CardNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(16)");

                    b.Property<string>("CardOwner")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("PaymentDetails");
                });
#pragma warning restore 612, 618
        }
    }
}