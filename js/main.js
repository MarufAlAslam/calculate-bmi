$('.genderBtn').click(function(){
    $('.genderBtn').removeClass('active')
    $(this).addClass('active')
})

$(document).ready(function(){
    $('input[type="checkbox"]').prop('checked', false);
    $('.calculateBtn').click(function(e){
        e.preventDefault()
    
        var weight = Number($('#weight').val())
        var feet = Number($('#feet').val())
        var inch = Number($('#inch').val())
    
        var height = (feet*12 + inch)
        // console.log(height)
    
        var bmi = (703*weight)/(height*height)
        bmi = bmi.toFixed(2)
        // bmi = Math.ceil(bmi)
        // console.log(bmi)
        $('.result').show()
        $('#myResult').html(bmi)
    
        var stage = 0
        if(bmi<18.5){
            stage=1
        }
        else if(bmi>=18.5 && bmi <25){
            stage=2
        }
        else if(bmi>=25 && bmi <30){
            stage=3
        }
        else if(bmi>=30 && bmi <35){
            stage=4
        }
        else if(bmi>=35 && bmi <40){
            stage=5
        }
        else if(bmi>=40){
            stage=6
        }
        console.log(stage)
        $('tr.stage'+stage).addClass('active')
    })
})


var impOrMet = 0
$('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
        console.log("Checkbox is checked.");
        $('.state').removeClass('active')
        $('.met').addClass('active')
        impOrMet = 1
        console.log(impOrMet)






        $('.calculateBtn').click(function(e){
            e.preventDefault()
        
            var weight = Number($('#weight').val())/2.205
            var feet = Number($('#feet').val())
            var inch = Number($('#inch').val())
        
            var height = (feet*12 + inch)/39.37
            // console.log(height)
        
            var bmi = weight/(height*height)
            bmi = bmi.toFixed(2)
            // bmi = Math.ceil(bmi)
            // console.log(bmi)
            $('.result').show()
            $('#myResult').html(bmi)
        
            var stage = 0
            if(bmi<18.5){
                stage=1
            }
            else if(bmi>=18.5 && bmi <25){
                stage=2
            }
            else if(bmi>=25 && bmi <30){
                stage=3
            }
            else if(bmi>=30 && bmi <35){
                stage=4
            }
            else if(bmi>=35 && bmi <40){
                stage=5
            }
            else if(bmi>=40){
                stage=6
            }
            console.log(stage)
            $('tr.stage'+stage).addClass('active')
        })
    }
    else if($(this).is(":not(:checked)")){
        console.log("Checkbox is unchecked.");
        $('.state').removeClass('active')
        $('.imp').addClass('active')
        impOrMet = 2
        console.log(impOrMet)





        $('.calculateBtn').click(function(e){
            e.preventDefault()
        
            var weight = Number($('#weight').val())/2.205
            var feet = Number($('#feet').val())
            var inch = Number($('#inch').val())
        
            var height = (feet*12 + inch)/39.37
            // console.log(height)
        
            var bmi = (703*weight)/(height*height)
            bmi = bmi.toFixed(2)
            // bmi = Math.ceil(bmi)
            // console.log(bmi)
            $('.result').show()
            $('#myResult').html(bmi)
        
            var stage = 0
            if(bmi<18.5){
                stage=1
            }
            else if(bmi>=18.5 && bmi <25){
                stage=2
            }
            else if(bmi>=25 && bmi <30){
                stage=3
            }
            else if(bmi>=30 && bmi <35){
                stage=4
            }
            else if(bmi>=35 && bmi <40){
                stage=5
            }
            else if(bmi>=40){
                stage=6
            }
            console.log(stage)
            $('tr.stage'+stage).addClass('active')
        })
    }
});



$('.resetBtn').click(function(e){
    e.preventDefault()
    $("input").val("")
})

