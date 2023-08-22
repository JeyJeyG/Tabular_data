getData()
        async function getData(){
            const response =  await fetch('ZonAnn.Ts+dSST.csv');
            const data =  await response.text();
            // console.log(data);
            const table = data.split('\n').slice(1);
            table.forEach(elt => {
                const columns =  elt.split(',');
                const year = columns[0];
                const temp = columns[1];
                console.log(year, temp); 

            });
            

        }
        treeData();
        async function treeData(){
            const response = await fetch('trees.csv');
            const data = await response.text();
            //
            
            const table = data.split('\n');
            table.forEach(elt => {
                const columns = elt.split('-');
                const index = columns[0];
                const height = columns[3];
                const Volume = columns[4];
                console.log(index, height, Volume);
            });
        }