from django.shortcuts import render

# Create your views here.


def home_view(request):
    """Function that renders the portfolio's home view page."""

    return render(request, 'website/temp.html')
