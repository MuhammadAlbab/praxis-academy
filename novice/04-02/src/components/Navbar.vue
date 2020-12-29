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
                <router-link to="/menusatu">
                <v-list-item>
                    <v-list-icon>
                        <v-icon>mdi-star</v-icon>
                    </v-list-icon>
                    <v-list-content>
                        <v-list-title>Menu Satu</v-list-title>
                    </v-list-content>
                </v-list-item>
                </router-link>

                <router-link to="/menudua">
                <v-list-item>
                    <v-list-icon>
                        <v-icon>mdi-message</v-icon>
                    </v-list-icon>
                    <v-list-content>
                        <v-list-title>Menu Dua</v-list-title>
                    </v-list-content>
                </v-list-item>
                </router-link>

                <router-link to="/menutiga">
                <v-list-item>
                    <v-list-icon>
                        <v-icon>mdi-flash</v-icon>
                    </v-list-icon>
                    <v-list-content>
                        <v-list-title>Menu Tiga</v-list-title>
                    </v-list-content>
                </v-list-item>
                </router-link>
                

            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <router-link to="/">
            <v-toolbar-title class="judul">Praxis Academy</v-toolbar-title>
            </router-link>
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