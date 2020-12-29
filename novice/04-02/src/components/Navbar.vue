<template>
    <nav>
        <v-navigation-drawer v-model="drawer" app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        Praxis Academy
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Some  Menu!
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list dense nav>
                
                <v-list-item
                link to="/menusatu">
                    <v-list-icon>
                        <v-icon>mdi-star</v-icon>
                    </v-list-icon>
                    <v-list-content>
                        <v-list-title>Menu Satu</v-list-title>
                    </v-list-content>
                </v-list-item>
                

                
                <v-list-item
                link to="/menudua">
                    <v-list-icon>
                        <v-icon>mdi-message</v-icon>
                    </v-list-icon>
                    <v-list-content>
                        <v-list-title>Menu Dua</v-list-title>
                    </v-list-content>
                </v-list-item>

                <v-list-item
                link to="/menutiga">
                    <v-list-icon>
                        <v-icon>mdi-flash</v-icon>
                    </v-list-icon>
                    <v-list-content>
                        <v-list-title>Menu Tiga</v-list-title>
                    </v-list-content>
                </v-list-item>
                

            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-btn 
            text 
            link to="/">Praxis Academy</v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data: () => {
      return{
        drawer: false,
      }
    }
}
</script>

<style>

</style>