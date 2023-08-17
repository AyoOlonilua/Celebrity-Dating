$(document).ready(function() {
    $("form#register").submit(function(e) {
        const gender = $("select#gender").val();

        if (gender === 'female') {
            window.location = "./male.html"
        }else {
            window.location = "./female.html"
        }

        e.preventDefault();
    });

    $("form#match").submit(function(e) {
        const color = $("select#color").val();
        const hobby = $("select#hobby").val();
        const animals = $("select#animals").val();
        const complexion = $("select#complexion").val();
        const height = $("select#height").val();
        const size = $("select#size").val();
        
        if ((color === 'Red' || color === 'Blue') & (hobby === 'Music' || hobby === 'Dancing') & animals === 'Dog' & complexion === 'Dark' & height === 'Average' & (size === 'Average')) {
            $("#match").hide();
            $("#match1").show();
            // window.location = "./male-celeb.html"
        } else if (color === 'Blue' & (hobby === 'Dancing' || hobby === 'Music') & animals === 'Dog' & (complexion === 'Brown' || complexion === 'Dark') & (height === 'Average' || height === 'Tall') & (size === 'Slim' || size === 'Average')) {
            $("#match").hide();
            $("#match3").show();
        } else if ((color === 'Green' || color === 'Red') & (hobby === 'Music' || hobby === 'Movies') & (animals === 'Cat' || animals === 'Dog') & complexion === 'Dark' & height === 'Short' & (size === 'Slim' || size === 'Average')) {
            $("#match").hide();
            $("#match2").show();
        } else if ((color === 'Blue' || color === 'Green') & (hobby === 'Movies' || hobby === 'Music') & (animals === 'Horse' || animals === 'Dog') & (complexion === 'Brown' || complexion === 'Dark') & height === 'Tall' & size === 'Huge') {
            $("#match").hide();
            $("#match4").show();
        } else if ((color === 'Blue' || color === 'Green') & (hobby === 'Dancing' || hobby === 'Music') & animals === 'Horse' & (complexion === 'Brown' || complexion === 'Dark') & height === 'Tall' & size === 'Huge') {
            $("#match").hide();
            $("#match7").show();
        } else if ((color === 'Red' || color === 'Green') & (hobby === 'Movies' || hobby === 'Dancing') & (animals === 'Cat' || animals === 'Horse') & (complexion === 'Brown' || complexion === 'Dark') & height === 'Average' & (size === 'Slim' || size === 'Average')) {
            $("#match").hide();
            $("#match5").show();
        } else if ((color === 'Red' || color === 'Blue') & (hobby === 'Movies' || hobby === 'Dancing') & (animals === 'Horse' || animals === 'Dog') & (complexion === 'Light' || complexion === 'Brown') & height === 'Tall' & size === 'Huge') {
            $("#match").hide();
            $("#match6").show();
        } else if (color === 'Red' & hobby === 'Music' & (animals === 'Cat' || animals === 'Dog') & complexion === 'Light' & height === 'Average' & (size === 'Average')) {
            $("#match").hide();
            $("#match8").show();
        } else if ((color === 'Blue' || color === 'Green') & (hobby === 'Dancing' || hobby === 'Movies') & animals === 'Dog' & (complexion === 'Brown' || complexion === 'Dark') & height === 'Average' & (size === 'Average' || size === 'Slim')) {
            $("#match").hide();
            $("#match9").show();
        } else if ((color === 'Red' || color === 'Green') & (hobby === 'Music' || hobby === 'Dancing') & animals === 'Dog' & (complexion === 'Brown' || complexion === 'Light') & height === 'Short' & (size === 'Average' || size === 'Slim')) {
            $("#match").hide();
            $("#match10").show();
        } else if (color === 'Green' & hobby === 'Movies' & (animals === 'Cat' || animals === 'Horse') & complexion === 'Light' & height === 'Tall' & size === 'Huge') {
            $("#match").hide();
            $("#match11").show();
        } else if ((color === 'Red'|| color === 'Blue') & hobby === 'Movies' & (animals === 'Horse' || animals === 'Dog') & complexion === 'Light' & (height === 'Average' || height === 'Short') & (size === 'Average' || size === 'Huge')) {
            $("#match").hide();
            $("#match12").show();
        } else if (color === 'Red' & hobby === 'Movies' & animals === 'Dog' & (complexion === 'Light' || complexion === 'Brown') & (height === 'Average' || height === 'Tall') & (size === 'Average' || size === 'Huge')) {
            $("#match").hide();
            $("#match13").show();
        } else if ((color === 'Blue' || color === 'Red') & hobby === 'Dancing' & animals === 'Cat' & (complexion === 'Brown' || complexion === 'Dark') & (height === 'Average' || height === 'Tall') & size === 'Slim') {
            $("#match").hide();
            $("#match14").show();
        } else if ((color === 'Blue' || color === 'Red') & (hobby === 'Dancing' || hobby === 'Movies') & (animals === 'Horse' || animals === 'Dog') & complexion === 'Light' & (height === 'Average' || height === 'Short') & size === 'Average') {
            $("#match").hide();
            $("#match15").show();
        } else if ((color === 'Green' || color === 'Red' || color === 'Blue') & (hobby === 'Music' || hobby === 'Dancing' || hobby === 'Movies') & (animals === 'Horse' || animals === 'Dog' || animals === 'Cat') & (complexion === 'Dark' || complexion === 'Brown') & (height === 'Average' || height === 'Tall') & size === 'Average' || size === 'Slim') {
            $("#match").hide();
            $("#match16").show();
        } else {
            $("#match").hide();
            $("#matchx").show();
        }

        e.preventDefault();
      });

      $("form#match0").submit(function(e) {
        const color = $("select#color").val();
        const hobby = $("select#hobby").val();
        const animals = $("select#animals").val();
        const complexion = $("select#complexion").val();
        const height = $("select#height").val();
        const type = $("select#type").val();

        if ((color === 'Red' || color === 'Purple') & (hobby === 'Movies' || hobby === 'Dancing') & animals === 'Dog' & complexion === 'Brown' & height === 'Tall' & type === 'Brunette') {
            $("#match0").hide();
            $("#match1").show();
        } else if ((color === 'Purple' || color === 'Red') & hobby === 'Movies' & animals === 'Cat' & (complexion === 'Light' || complexion === 'Brown') & (height === 'Tall' || height === 'Average') & type === 'Blonde') {
            $("#match0").hide();
            $("#match2").show();
        } else if (color === 'Red' & (hobby === 'Dancing' || hobby === 'Movies') & (animals === 'Horse' || animals === 'Cat') & complexion === 'Light' & height === 'Tall' & type === 'Brunette') {
            $("#match0").hide();
            $("#match3").show();
        } else if ((color === 'Purple' || color === 'Red') & (hobby === 'Dancing' || hobby === 'Music') & (animals === 'Horse' || animals === 'Dog') & (complexion === 'Brown' || complexion === 'Dark') & (height === 'Average' || height === 'Short') & (type === 'Brunette' || type === 'Blonde')) {
            $("#match0").hide();
            $("#match4").show();
        } else if ((color === 'Red' || color === 'Pink') & hobby === 'Movies' & animals === 'Cat' & (complexion === 'Brown' || complexion === 'Dark') & (height === 'Average' || height === 'Short') & (type === 'Brunette' || type === 'Black')) {
            $("#match0").hide();
            $("#match5").show();
        } else if (color === 'Purple' & (hobby === 'Dancing' || hobby === 'Music') & animals === 'Dog' & (complexion === 'Brown' || complexion === 'Dark') & (height === 'Average' || height === 'Tall') & type === 'Black') {
            $("#match0").hide();
            $("#match6").show();
        } else if ((color === 'Pink' || color === 'Red') & (hobby === 'Dancing' || hobby === 'Music') & (animals === 'Cat' || animals === 'Dog') & complexion === 'Light' & (height === 'Average' || height === 'Short') & type === 'Blonde') {
            $("#match0").hide();
            $("#match7").show();
        } else if (color === 'Red' & (hobby === 'Movies' || hobby === 'Dancing') & (animals === 'Horse' || animals === 'Dog') & complexion === 'Light' & height === 'Average' & (type === 'Brunette' || type === 'Black')) {
            $("#match0").hide();
            $("#match8").show();
        } else if ((color === 'Red' || color === 'Pink') & (hobby === 'Movies' || hobby === 'Dancing') & (animals === 'caT' || animals === 'Dog') & complexion === 'Light' & height === 'Short' & type === 'Brunette') {
            $("#match0").hide();
            $("#match9").show();
        } else if (color === 'Purple' & (hobby === 'Music' || hobby === 'Dancing') & (animals === 'Horse' || animals === 'Dog') & (complexion === 'Dark' || complexion === 'Brown') & height === 'Average' & (type === 'Brunette' || type === 'Black')) {
            $("#match0").hide();
            $("#match10").show();
        } else if ((color === 'Red' || color === 'Purple') & hobby === 'Music' & (animals === 'Horse' || animals === 'Dog') & (complexion === 'Brown' || complexion === 'Dark') & height === 'Average' & (type === 'Brunette' || type === 'Black')) {
            $("#match0").hide();
            $("#match11").show();
        } else if ((color === 'Red' || color === 'Pink') & hobby === 'Movies' & (animals === 'Cat' || animals === 'Dog') & complexion === 'Light' & height === 'Average' & (type === 'Brunette' || type === 'Black')) {
            $("#match0").hide();
            $("#match12").show();
        } else if (color === 'Red' & (hobby === 'Music' || hobby === 'Dancing') & animals === 'Cat' & (complexion === 'Brown' || complexion === 'Dark') & (height === 'Average' || height === 'Short') & (type === 'Brunette' || type === 'Blonde')) {
            $("#match0").hide();
            $("#match13").show();
        } else if ((color === 'Purple' || color === 'Pink') & (hobby === 'Movies' || hobby === 'Music') & (animals === 'Horse' || animals === 'Dog') & complexion === 'Light' & height === 'Tall' & (type === 'Brunette' || type === 'Blonde')) {
            $("#match0").hide();
            $("#match14").show();
        } else if (color === 'Red' & (hobby === 'Movies' || hobby === 'Music') & (animals === 'Cat' || animals === 'Dog') & (complexion === 'Light' || complexion === 'Brown') & (height === 'Average' || height === 'Short') & (type === 'Brunette' || type === 'Black')) {
            $("#match0").hide();
            $("#match15").show();
        } else if ((color === 'Red' || color === 'Pink' || color === 'Purple') & (hobby === 'Movies' || hobby === 'Music' || hobby === 'Dancing') & (animals === 'Cat' || animals === 'Dog' || animals === 'Horse') & complexion === 'Light' & (height === 'Average' || height === 'Short') & (type === 'Brunette' || type === 'Black' || type === 'Blonde')) {
            $("#match0").hide();
            $("#match16").show();
        } else {
            $("#match0").hide();
            $("#matchx").show();
        }
    
        e.preventDefault();
    });
  
});