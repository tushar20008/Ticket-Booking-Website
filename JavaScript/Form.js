var movies_list = { 'movies':[
						{
							'Name':'THE SMURFS',
							'Data': ['1 November, Sunday - 9:00 AM, AUDI - 1','1 November, Sunday - 2:00 PM, AUDI - 1','1 November, Sunday - 8:00 PM, AUDI - 1',
                                     '2 November, Sunday - 9:00 AM, AUDI - 1','2 November, Sunday - 2:00 PM, AUDI - 1','2 November, Sunday - 8:00 PM, AUDI - 1'],
						},
						{
							'Name':'MINIONS',
							'Data': ['1 November, Sunday - 9:00 AM, AUDI - 2','1 November, Sunday - 2:00 PM, AUDI - 2','1 November, Sunday - 8:00 PM, AUDI - 2',
                                     '2 November, Sunday - 9:00 AM, AUDI - 2','2 November, Sunday - 2:00 PM, AUDI - 2','2 November, Sunday - 8:00 PM, AUDI - 2'],
						},
						{
							'Name':'INSIDE OUT',
							'Data': ['1 November, Sunday - 9:00 AM, AUDI - 3','1 November, Sunday - 2:00 PM, AUDI - 3','1 November, Sunday - 8:00 PM, AUDI - 3',
                                     '2 November, Sunday - 9:00 AM, AUDI - 3','2 November, Sunday - 2:00 PM, AUDI - 3','2 November, Sunday - 8:00 PM, AUDI - 3'],
						},
					]
				};

var forms = document.getElementsByClassName('form');

if (forms!=null)
{
    var i,j,value=0;

    for(i=0; i<3; i++)
    {
        var movie_name = forms[0].getElementsByTagName('legend')[i];
        var data = forms[0].getElementsByTagName('select')[i];

        movie_name.innerHTML = movies_list.movies[i].Name;

        for(j=0; j<movies_list.movies[i].Data.length; j++)
        {
            var opt = document.createElement('option');
            opt.value = value++;
            opt.name = 'dataIndex';
            opt.innerHTML = movies_list.movies[i].Data[j];
            data.appendChild(opt);
        }
    }
}