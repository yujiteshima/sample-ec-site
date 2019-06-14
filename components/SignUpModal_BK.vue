<template lang="pug">
  div
    b-button(v-b-modal.modal-prevent-closing) OpenModal

    div.mt-3 Submitted Names:
      div(v-if="submittedNames.length === 0") --
      ul(v-else).mb-0.pl-3
        li(v-for="name in submittedNames") {{ names }}

    b-modal(
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    )
      form(ref="from" @submit.stop.prevent="handleSubmit")
        b-form-group(
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        )

          b-form-input(
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          )
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: []
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid ? "valid" : "invalid";
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>
