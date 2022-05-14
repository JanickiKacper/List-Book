from .models import TODO
from rest_framework import serializers


class TODOSerializer(serializers.ModelSerializer):

    class Meta:
        model = TODO
        fields = "__all__"