from django.shortcuts import render


def home_view(request):
    """Function that renders the portfolio's home view page."""

    return render(request, 'website/index.html')
