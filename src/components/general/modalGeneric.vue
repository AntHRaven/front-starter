<template>
  <div>
    <custom-modal
      :visible="modalData.modalType !== null"
      :title="modalData.title"
      :width="modalData.width"
    >
      <login-form v-if="modalData.modalType === 'showLoginModal'"></login-form>
    </custom-modal>
  </div>
</template>

<script>
import CustomModal from "@/components/general/customModal";
import LoginForm from "@/components/login/loginForm";
import { mapGetters } from "vuex";
export default {
  name: "modalGeneric",
  components: { LoginForm, CustomModal },
  computed: {
    ...mapGetters({
      modalData: "GETSHOWMODAL",
    }),
  },
};
</script>

<style scoped></style>
