<script lang="ts">

</script>

<header class="header">
    <div class="header__title"><a href="#"><h1>Emma Guillaume Portfolio</h1></a><div class="header__title--underline"></div></div>
    <div class="buttons__header">
        <a href="#">CV</a>
        <a href="#">Contact</a>
    </div>
</header>

<style>
    .header__title--underline{
        background-color: #79A671;
        width: 100%;
        height: 5px;

    }
    .header{
        padding: 2vh 10vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .buttons__header{
        display: flex;
        gap: 5vw;
    }  
    @keyframes myanimation {
            from {color: #303D21;
                border: solid 2px #303D21;
                background-color: #ffffff00;
            }
            to {color: white;
                border: solid 2px #79A671;
                background-color: #79A671;
            }
        }
        @keyframes reverse {
            from {color: white;
                border: solid 2px #79A671;
                background-color: #79A671;
            }
            to {
                color: #303D21;
                border: solid 2px #303D21;
                background-color: #ffffff00;
            }
        }
        .buttons__header a{
        animation-name: reverse;
        animation-duration: 0.15s;
        font-weight: 600;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: #303D21;
        border: solid 2px #303D21;
        border-radius: 30px;
        padding: 1vh 2vw;
    }
        .buttons__header a:hover{
        animation-name: myanimation;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
    }
</style>