<script>
    import { projets } from "../lib/projet";
    let projectDescription = projets[0].description;
    let imgProject = projets[0].imgUrl;
</script>

<div class="last-project">
    <h2>Mon dernier projet</h2>
    <img src={imgProject} alt="Homme qui grimpe en salle d'escalade test img" />
    <p>{projectDescription}</p>
    <a href="#"> Voir mon dernier projet</a>
</div>

<style>
    .last-project {
        display: flex;
        flex-direction: column;
        margin: 3vh 0;
    }
    .last-project a {
        font-weight: 500;
    }
    .last-project img {
        border-radius: 10px;
    }
</style>
