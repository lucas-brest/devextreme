using back.Model;
using Microsoft.AspNetCore.OData;
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;

static IEdmModel GetEdmModel()
{
    ODataConventionModelBuilder builder = new();
    builder.EntitySet<User>("User");
    return builder.GetEdmModel();
}

var builder = WebApplication.CreateBuilder(args);
const string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddControllers()
    .AddOData(options => options
        .AddRouteComponents("odata", GetEdmModel())
        .Select()
        .Filter()
        .OrderBy()
        .SetMaxTop(20)
        .Count()
        .Expand()
    );

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
      builder =>
      {
          builder.WithOrigins("*");
          builder.AllowAnyHeader();
          builder.AllowAnyMethod();
      });

});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
