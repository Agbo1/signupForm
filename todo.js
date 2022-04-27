const app = Vue.createApp({

    data(){
        return{
            title: 'OCITY',
            name: 'Have Account?',
            create: 'Log in',
            contentTitle: 'Manage your freelance business with us!',
            contentText: 'Takes less than 10 minutes to fill out all the information needed to register your business.',
            terms: ' By signing up you are agreening to our terms and conditions.',
            email: '',
            password: '',
            fullName: '',
            passwordError: '',
            payment: false,
            showForm: true,
            paymentDetail: 'PAYMENT DETAILS',
            billingAddress: 'BILLING ADDRESS',
            cardDetail: '',
            cardNumber: '',
            expiry: '',
            cvv: '',
            street: '',
            city: '',
            state: 'state',
            zip: '',
            confirmation: false,
            confirmPayment: 'Payment successful!',
            successfulForm: true,

            
            
  
        }
    },
    methods:{
        handleSubmit(){

            this.passwordError = this.password.length > 5 ?
             '' :'The password must the atleast 6 characters'
            
             if(!this.passwordError){
                 console.log('email:', this.email)
                 console.log('fullName:', this.fullName)
                 console.log('password:', this.password)

                this.showForm = false
                this.payment = true
             }
        },
        paymentDetails(){
            console.log('cardDetail:', this.cardDetail)
            console.log('cardNumber:', this.cardNumber)
            console.log('expiry:', this.expiry)
            console.log('cvv:', this.cvv)
            console.log('street:', this.street)
            console.log('state:', this.state)
            console.log('zip:', this.zip)

            this.payment = false
            this.confirmation = true
        },
        back(){
            this.payment = false
            this.showForm = true
        },
        back2(){
            this.confirmation = false
            this.payment =true
            
        },
        home(){
            this.confirmation = false
            this.showForm = true
        }
    }
})

app.mount('#app')