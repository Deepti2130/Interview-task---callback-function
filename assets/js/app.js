const cl = console.log;

const hrcall = (skill) =>{
    //API call
    setTimeout(()=>{
    if(skill.toLowerCase().includes("mean")){
        cl(`candidate short list for 1st technical interview`)
        swal.fire({
            title:"candidate short listed for 1st technical interview ",
            timer:2500,
            icon:"success"
        })
        firstTechInt();
            
    }else{
        // throw new Error(`candidate does not fit in given profile`)
        swal.fire({
            title:"candidate does not fit in given profile",
            timer:2500,
            icon:"error"
        })
    }
    }, 2500)
}

const firstTechInt = () => {
    //API call
    setTimeout(()=>{
        let error =Math.random() < 0.5 ? true: false;
        if(!error){
            cl(`candidate is shortlisted for 2nd technical interview`)
            swal.fire({
                title:"candidate short listed for 2nd technical interview ",
                timer:2500,
                icon:"success"
            })
            secondTechInt();
            
        }else{
            // throw new Error(`candidate is very poor in basics`)
            swal.fire({
                title:"candidate is very poor in basics ",
                timer:2500,
                icon:"error"
            })
        }

    },1500)

}

const secondTechInt = () => {
    //API call
    setTimeout(()=>{
        let error =Math.random() < 0.7 ? true: false;
        if(!error){
            cl(`candidate is shortlisted for 3rd technical interview`)
            swal.fire({
                title:"candidate short listed for 3rd technical interview ",
                timer:2500,
                icon:"success"
            })
            thirdTechInt();
            
            
        }else{
            // throw new Error(`candidate is strugle to write code`)
            swal.fire({
                title:"Candidate is strugle to write code",
                timer:2500,
                icon:"error"
            })
        }

    },1000)

}

const thirdTechInt = () => {
    //API call
    setTimeout(()=>{
        let error =Math.random() < 0.7 ? true: false;
        if(!error){
            cl(`Congrats, you are selected, Hr will call back you`)
            swal.fire({
                title:"Congrats, you are selected ",
                timer:2500,
                icon:"Success"
            })
        }else{
            // throw new Error(`candidate failed to explain his/her previous project`)
            swal.fire({
                title:"candidate failed to explain his/her previous project ",
                timer:2500,
                icon:"error"
            })
        }

    },500)

}

hrcall("mean");
